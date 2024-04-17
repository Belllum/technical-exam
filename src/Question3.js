let datas = [
  {
    id: 1,
    name: "John Doe",
    status: 1,
  },
  {
    id: 2,
    name: "Jane Doe",
    status: 2,
  },
  {
    id: 3,
    name: "Adam Rocket",
    status: 2,
  },
  {
    id: 4,
    name: "Luis Rocket",
    status: 1,
  },
];

const arrayToObject = (data) => {
  return data.reduce((accumulator, currentValue) => {
    const key = `status-${currentValue.status}`;
    accumulator[key] = [...(accumulator[key] || []), currentValue];
    return accumulator;
  }, {});
};

const result = arrayToObject(datas);
console.log(result);
