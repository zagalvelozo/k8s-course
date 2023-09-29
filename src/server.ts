import { app } from "./app";

const PORT = 3333 || Number(process.env.PORT)
const HOST = '0.0.0.0'  || process.env.HOST

app.listen(PORT, HOST, () => {
    console.log(`server started in: ${HOST}:${PORT}`);
});