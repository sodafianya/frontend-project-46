const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  const indent = ' '.repeat(depth * 4);
  const lines = Object.entries(value).map(
    ([k, v]) => `${indent}    ${k}: ${stringify(v, depth + 1)}`,
  );
  return `{\n${lines.join('\n')}\n${indent}}`;
};

const formatStylish = (diff, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 2);
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'removed':
        return `${indent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'updated':
        return [
          `${indent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${indent}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'nested':
        return `${indent}  ${node.key}: {\n${formatStylish(node.children, depth + 1)}\n${indent}  }`;
      default:
        return `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
    }
  });
  return lines.join('\n');
};

export default (diff) => `{\n${formatStylish(diff)}\n}`;
