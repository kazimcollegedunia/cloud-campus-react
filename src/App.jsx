import MainPage from "./Pages/MainPage/Mainpage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return <> 
   {/* 🔔 Global Toast – sirf ek baar */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            minWidth: "320px",     // 🔥 width bada
            padding: "16px 18px",  // 🔥 more space
            fontSize: "15px",
            borderRadius: "12px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.15)",
          },

          success: {
            style: {
              background: "#16a34a", // green
              color: "#fff",
            },
          },

          error: {
            style: {
              background: "#911d1dff", // 🔥 RED (high contrast)
              color: "#fff",
            },
          },
        }}
      />
    <MainPage />
  </>
};

export default App;