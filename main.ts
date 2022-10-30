interface PrintBody {
  message: string
  count: number
};

const printOutMessage = (printBody: PrintBody) => {
  const { message, count } = printBody;
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
};

const main = () => {
  printOutMessage({
    message: "Hello World",
    count: 4,
  })
};

main();
