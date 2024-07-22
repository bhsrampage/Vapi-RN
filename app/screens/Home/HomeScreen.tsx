import React, { useMemo } from "react"
import { Icon, Screen, Text } from "../../components"
import { useVapi, CALL_STATUS } from "../../vapi/useVapi"
import { ActivityIndicator, ViewStyle, View } from "react-native"
import { spacing } from "app/theme"

const HomeScreen = () => {
  const { toggleCall, messages, callStatus } = useVapi()

  return (
    <Screen safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$messageBox}>
        <Text>{messages.toString()}</Text>
        {callStatus === CALL_STATUS.LOADING ? (
          <ActivityIndicator size={"small"} />
        ) : (
          <Icon
            icon={callStatus === CALL_STATUS.ACTIVE ? "x" : "podcast"}
            size={50}
            onPress={toggleCall}
          />
        )}
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  padding: spacing.md,
}

const $messageBox: ViewStyle = {
  width: "100%",
  height: "90%",
  alignItems: "center",
  justifyContent: "flex-end",
}

export default HomeScreen
