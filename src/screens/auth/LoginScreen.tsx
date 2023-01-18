import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPassword, setUsername, setLoggedInState } from "./rx/reducer";

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  //   const username = useSelector((state: RootState) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform validation for username or email
    if (!username.includes("@") && !username.includes(".")) {
      return;
    }
    // Perform validation for password
    if (password.length < 8) {
      return;
    }
    // Perform login logic
    dispatch(setUsername(username));
    dispatch(setPassword(password));
    dispatch(setLoggedInState(true));
  };
  useEffect(() => {
    if (!username.includes("@") && !username.includes(".")) {
      setIsUserValid(false);
      return;
    }
    setIsUserValid(true);
  }, [username]);

  useEffect(() => {
    if (password.length < 8) {
      setIsPasswordValid(false);
      return;
    }
    setIsPasswordValid(true);
  }, [password]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username or Email</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUser} />
      {!isUserValid ? (
        <Text style={styles.errorLogin}>Invalid Username</Text>
      ) : (
        ""
      )}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPass}
        secureTextEntry={true}
      />
      {!isPasswordValid ? (
        <Text style={styles.errorLogin}>Invalid Password</Text>
      ) : (
        ""
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  errorLogin: {
    color: "grey",
  },
});

export default LoginScreen;
