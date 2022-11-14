import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUpPost } from "../../api/signUpAPI";
import * as ERRORS from "../../utils/errorsMessage";
import * as VF from "../../utils/validationFunctions";
import * as S from "./styles";

type SignUpPost = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setError,
    watch,
  } = useForm<SignUpPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignUpPost> = ({
    email,
    name,
    password,
    password_confirmation,
  }) => {
    mutate({ email, name, password, password_confirmation });
  };
  const { mutate, isLoading } = useMutation(signUpPost, {
    onSuccess: () => navigate("/signin"),
    onError: () => {
      setError("email", {
        message: ERRORS.EMAIL_EXISTS,
      });
    },
  });
  const [seePassword, setSeePassword] = useState(false);
  console.log(errors);
  return (
    <S.Container>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.LogoContainer>
          <S.Logo />
          <S.LogoText>Multi Factor Auth</S.LogoText>
        </S.LogoContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="name">Name</S.Label>
          <S.FieldContainer>
            <S.Field
              type="name"
              autoCorrect="false"
              placeholder="Maria"
              {...register("name", {
                required: true,
                validate: {
                  checkName: (v) => VF.isValidName(v) || ERRORS.INVALID_NAME,
                },
              })}
            />
          </S.FieldContainer>
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="email">Email</S.Label>
          <S.FieldContainer>
            <S.Field
              autoCorrect="false"
              type="email"
              placeholder="maria@email.com"
              {...register("email", {
                required: true,
                validate: {
                  checkEmail: (v) => VF.isValidEmail(v) || ERRORS.INVALID_EMAIL,
                },
              })}
            />
          </S.FieldContainer>
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password">Password</S.Label>
          <S.FieldContainer>
            <S.Field
              type={!seePassword ? "password" : "text"}
              autoComplete="off"
              placeholder="password"
              {...register("password", {
                required: true,
                validate: {
                  checkPassword: (v) =>
                    VF.isValidPassword(v) || ERRORS.INVALID_PASSWORD,
                },
              })}
            />
            <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
              {!seePassword ? <S.DontSeePasswordIcon /> : <S.SeePasswordIcon />}
            </S.IconContainer>
          </S.FieldContainer>
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password_confirmation">
            Password confirmation
          </S.Label>
          <S.FieldContainer>
            <S.Field
              type="password"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              placeholder="password"
              {...register("password_confirmation", {
                required: true,
                validate: (password_confirmation: string) => {
                  if (watch("password") !== password_confirmation) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
          </S.FieldContainer>
          <S.ErrorMessage>
            {errors.password_confirmation?.message}
          </S.ErrorMessage>
        </S.LabelFieldContainer>

        <S.Button disabled={!isValid || isLoading}>SignUp</S.Button>

        <S.LinkContainer>
          <S.LinkPage to="/signin">Already have an account?</S.LinkPage>
        </S.LinkContainer>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
