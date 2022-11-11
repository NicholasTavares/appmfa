import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { isValidName } from "../../utils/isValidName";
import { isValidEmail } from "../../utils/isValidEmail";
import * as S from "./styles";
import { useMutation } from "react-query";
import { signUpPost } from "../../api/signUpAPI";
import { useNavigate } from "react-router-dom";

type SignUpPost = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(signUpPost, {
    onSuccess: () => navigate("/signin"),
  });
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignUpPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignUpPost> = ({
    email,
    name,
    password,
    password_confirmation,
  }) => {
    mutate({ email, name, password, password_confirmation });
  };
  const [seePassword, setSeePassword] = useState(false);

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
              placeholder="Maria"
              {...register("name", { required: true, validate: isValidName })}
            />
          </S.FieldContainer>
          {errors.name && (
            <S.ErrorMessage>
              Name must have at minimum 4 characters
            </S.ErrorMessage>
          )}
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="email">Email</S.Label>
          <S.FieldContainer>
            <S.Field
              type="email"
              placeholder="maria@email.com"
              {...register("email", { required: true, validate: isValidEmail })}
            />
          </S.FieldContainer>
          {errors.email && <S.ErrorMessage>Invalid email</S.ErrorMessage>}
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password">Password</S.Label>
          <S.FieldContainer>
            <S.Field
              type={!seePassword ? "password" : "text"}
              autoComplete="off"
              placeholder="password"
              {...register("password", { required: true, min: 6 })}
            />
            <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
              {!seePassword ? <S.DontSeePasswordIcon /> : <S.SeePasswordIcon />}
            </S.IconContainer>
          </S.FieldContainer>
        </S.LabelFieldContainer>

        <S.LabelFieldContainer>
          <S.Label htmlFor="password_confirmation">
            Password confirmation
          </S.Label>
          <S.FieldContainer>
            <S.Field
              type={!seePassword ? "password" : "text"}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              placeholder="password"
              {...register("password_confirmation", {
                required: true,
              })}
            />
          </S.FieldContainer>
          {errors.password_confirmation && (
            <S.ErrorMessage>Your passwords do not match</S.ErrorMessage>
          )}
        </S.LabelFieldContainer>

        <S.Button disabled={!isValid || isLoading}>SignIn</S.Button>

        <S.LinkContainer>
          <S.LinkPage to="/signin">Already have an account?</S.LinkPage>
        </S.LinkContainer>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
