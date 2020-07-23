module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement === 20) {
    return item;
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, durability: item.durability - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else {
    return { ...item, name: `+[${item.enhancement}]${item.name}` };
  }
}
