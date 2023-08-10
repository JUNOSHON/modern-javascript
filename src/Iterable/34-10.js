const like = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
for (let i = 0; i < like.length; i++) {
  console.log(like[i]);
}

for (const item of like) {
  console.log(item);
}
