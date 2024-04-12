import "dotenv/config";
import { router } from "./controller/index.js";
import { app } from "./app.js";
const { PORT } = process.env;
app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});