import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setUsers } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  lastName: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  email: yup
    .string()
    .email("invalid email")
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  password: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  location: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  picture: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
  password: yup
    .string()
    .required(
      <i
        className="fa-sharp fa-solid fa-circle-exclamation"
        style={{ color: "#b94a48" }}
      ></i>
    ),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    // console.log(loggedIn.users);
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      dispatch(
        setUsers({
          users: loggedIn.users,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isRegister && (
              <>
                <Box sx={{ gridColumn: "span 2" }}>
                  <input
                    id="kullanıcı"
                    type="radio"
                    className="btn-check"
                    name="occupationOption"
                    label="Kullanıcı"
                    checked={values.occupationOption === "Kullanıcı"}
                    onChange={handleChange}
                    value="Kullanıcı"
                  />
                  <label
                    htmlFor="kullanıcı"
                    className="btn col-12 col-md-12 fw-bold"
                    style={{ backgroundColor: "#175c4c", color: "#fff" }}
                  >
                    ÜYE KAYDI
                  </label>
                </Box>
                <Box sx={{ gridColumn: "span 2" }}>
                  <input
                    id="psikolog"
                    type="radio"
                    className="btn-check"
                    name="occupationOption"
                    label="Psikolog"
                    checked={values.occupationOption === "Psikolog"}
                    onChange={handleChange}
                    value="Psikolog"
                  />
                  <label
                    htmlFor="psikolog"
                    className="btn col-12 col-md-12 fw-bold"
                    style={{ backgroundColor: "#175c4c", color: "#fff" }}
                  >
                    PSİKOLOG KAYDI
                  </label>
                </Box>
                {values.occupationOption === "Psikolog" ? (
                  <Box sx={{ gridColumn: "span 4" }} textAlign={"center"}>
                    <h3>Yeni Psikolog Kaydı</h3>
                  </Box>
                ) : (
                  <Box sx={{ gridColumn: "span 4" }} textAlign={"center"}>
                    <h3>Danışan Üye Kaydı</h3>
                  </Box>
                )}
                <TextField
                  label="Adınız"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Soyadınız"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Şehir"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Ülke"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                  name="country"
                  error={Boolean(touched.country) && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                  sx={{ gridColumn: "span 2" }}
                />

                {/* <Radio
                  label="Psikolog"
                  checked={values.occupationOption === "Psikolog"}
                  onChange={handleChange}
                  value="Psikolog"
                  name="occupationOption"
                />
                <Radio
                  label="Kullanıcı"
                  checked={values.occupationOption === "Kullanıcı"}
                  onChange={handleChange}
                  value="Kullanıcı"
                  name="occupationOption"
                /> */}
                {values.occupationOption === "Psikolog" ? null : (
                  <TextField
                    label="Meslek"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.occupation}
                    name="occupation"
                    error={
                      Boolean(touched.occupation) && Boolean(errors.occupation)
                    }
                    helperText={touched.occupation && errors.occupation}
                    sx={{ gridColumn: "span 4" }}
                  />
                )}
                {values.occupationOption === "Psikolog" ? (
                  <TextField
                    label="Hakkında"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.about}
                    name="about"
                    error={Boolean(touched.about) && Boolean(errors.about)}
                    helperText={touched.about && errors.about}
                    sx={{ gridColumn: "span 4" }}
                  />
                ) : null}
                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed #175c4c`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Resminizi Ekleyin</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}

            <TextField
              label="E-posta"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Parola"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: { background: "#175c4c" },
                color: { color: "#fff" },

                fontWeight: { fontWeight: "600" },
                "&:hover": { background: "#175c4c", color: "#fff" },
              }}
            >
              {isLogin ? "GİRİŞ YAP" : "KAYDOL"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: { color: "inherit" },
                "&:hover": {
                  cursor: "pointer",
                  color: { color: "#175c4c" },
                },
              }}
            >
              {isLogin
                ? "Hesabınız yok mu? Buradan Kaydolun."
                : "Zaten bir hesabınız mı var? Buradan giriş yapın."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
