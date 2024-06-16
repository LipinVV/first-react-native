import {StyleSheet, TextInputProps, TextInput, Pressable, View } from "react-native";
import {Colors, Fonts, Radius} from "../tokens";
import EyeClosed from "../../assets/svgIcons/eye-closed";
import EyeOpened from "../../assets/svgIcons/eye-opened";
import {useState} from "react";

export const Input = ({ isPassword,  ...properties}: TextInputProps & { isPassword?: boolean }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const handlePress = () => setIsPasswordVisible(prevState => !prevState);

    return <View>
        <TextInput
            style={styles.input}
            secureTextEntry={isPassword && !isPasswordVisible}
            { ...properties }
        />
        {isPassword && <Pressable
            onPress={handlePress}
            style={styles.eyeIcon}
        >
            {isPasswordVisible ? <EyeOpened /> : <EyeClosed />}
        </Pressable> }
    </View>
}

const styles = StyleSheet.create({
  input: {
      paddingHorizontal: 24,
      height: 58,
      backgroundColor: Colors.violetDark,
      borderRadius: Radius.r10,
      fontSize: Fonts.f16,
      lineHeight: 1.2,
      color: Colors.gray,
  },
  eyeIcon: {
      position: 'absolute',
      right: 0,
      paddingHorizontal: 20,
      paddingVertical: 18,
  }
})
