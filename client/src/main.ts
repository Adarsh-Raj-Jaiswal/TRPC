import {
  createTRPCProxyClient,
  httpBatchLink,
  // , loggerLink
} from "@trpc/client";
import { AppRouter } from "../../server/api";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    // loggerLink(),
    httpBatchLink({
      url: "http://localhost:3000/trpc",
      headers: { Authorization: "Token" },
    }),
  ],
});

async function main() {
  // const result1 = await client.sayHi.query();
  // console.log(result1);

  // const result2 = await client.logToServer.mutate("Hi from client");
  // console.log(result2);

  // // const result3 = await client.users.getUser.query();
  // // console.log(result3);

  // const result4 = await client.users.get.query({ userId: "1234" });
  // console.log(result4);

  // const result5 = await client.users.update.mutate({
  //   userId: "1234",
  //   name: "Adarsh",
  // });
  // console.log(result5);

  // const result6 = await client.secretData.query();
  // console.log(result6);

  const result = await client.form.fillForm.mutate({
    name: "adarsh",
    number: "9876543210",
    email: "adarsh@flipr.ai",
  });
  console.log(result);
}
main();
