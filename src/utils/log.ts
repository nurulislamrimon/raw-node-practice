export const logFunc = (payload: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(payload);
  }
};
