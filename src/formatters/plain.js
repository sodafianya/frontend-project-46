const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const formatPlain = (diff, parentKey = '') => {
  const lines = diff.flatMap((node) => {
    const currentKey = parentKey ? `${parentKey}.${node.key}` : node.key;

    switch (node.type) {
      case 'added':
        return `Property '${currentKey}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${currentKey}' was removed`;
      case 'updated':
        return `Property '${currentKey}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
      case 'nested':
        return formatPlain(node.children, currentKey);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  });

  return lines.join('\n');
};

export default formatPlain;
