import "./login-page.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useCookies } from "react-cookie";
import { BAZE_URL } from "../../api/BAZE_URL";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [cookies, setCookies] = useCookies(["SESSION1"]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const submit = async () => {
    if (login.length > 0 && password.length > 0) {
      const response = await axios.post(
        `${BAZE_URL}api/auth/login`,
        {
          email: login,
          password: password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setCookies("SESSION1", data.id, { path: "/" });
      if (response.status === 200) {
        console.log(cookies.SESSION);
        navigate("/main");
      }
    }
  };

  return (
    <div className="wrapper_login">
      <div className={"login_form"}>
        LOGIN
        <TextField
          required
          id="outlined-required"
          label="Логин"
          onChange={(e) => setLogin(e.target.value)}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" onClick={() => submit()}>
          Войти
        </Button>
      </div>
    </div>
  );
}
