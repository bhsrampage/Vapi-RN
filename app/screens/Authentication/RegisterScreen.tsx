import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {}

export const RegisterScreen: FC<RegisterScreenProps> = observer(function RegisterScreen(_props) {
  const authPasswordInput = useRef<TextInput>(null)
  const { navigation } = _props
  const [authPassword, setAuthPassword] = useState("")
  const [authPassword2, setAuthPassword2] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isAuthPasswordHidden2, setIsAuthPasswordHidden2] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  //   useEffect(() => {
  //     // Here is where you could fetch credentials from keychain or storage
  //     // and pre-fill the form fields.
  //     setAuthEmail("ignite@infinite.red")
  //     setAuthPassword("ign1teIsAwes0m3")

  //     // Return a "cleanup" function that React will run when the component unmounts
  //     return () => {
  //       setAuthPassword("")
  //       setAuthEmail("")
  //     }
  //   }, [])

  const error = isSubmitted ? validationError : ""

  function register() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (authPassword !== authPassword2) return

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = (isSecond: boolean): ComponentType<TextFieldAccessoryProps> =>
    useMemo(
      () =>
        function PasswordRightAccessory(props: TextFieldAccessoryProps) {
          return (
            <Icon
              icon={(isSecond ? isAuthPasswordHidden2 : isAuthPasswordHidden) ? "view" : "hidden"}
              color={colors.palette.neutral800}
              containerStyle={props.style}
              size={20}
              onPress={() =>
                isSecond
                  ? setIsAuthPasswordHidden2((val) => !val)
                  : setIsAuthPasswordHidden((val) => !val)
              }
            />
          )
        },
      [isAuthPasswordHidden, isAuthPasswordHidden2],
    )

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Icon icon={"back"} color={colors.palette.neutral800} size={30} onPress={navigation.goBack} />
      <Text testID="login-heading" tx="registerScreen.signUp" preset="heading" style={$signIn} />
      <Text tx="registerScreen.enterDetails" preset="subheading" style={$enterDetails} />
      {attemptsCount > 2 && (
        <Text tx="registerScreen.hint" size="sm" weight="light" style={$hint} />
      )}

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="registerScreen.emailFieldLabel"
        placeholderTx="registerScreen.emailFieldPlaceholder"
        helper={error}
        status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="registerScreen.passwordFieldLabel"
        placeholderTx="registerScreen.passwordFieldPlaceholder"
        RightAccessory={PasswordRightAccessory(false)}
      />

      <TextField
        value={authPassword2}
        onChangeText={setAuthPassword2}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden2}
        labelTx="registerScreen.reenterpasswordFieldLabel"
        placeholderTx="registerScreen.passwordFieldPlaceholder"
        RightAccessory={PasswordRightAccessory(true)}
      />

      <Button
        testID="login-button"
        tx="registerScreen.tapToSignIn"
        style={$tapButton}
        preset="reversed"
        onPress={register}
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $signIn: TextStyle = {
  marginBottom: spacing.sm,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}
