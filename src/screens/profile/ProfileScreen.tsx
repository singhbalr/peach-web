import React, { useMemo, useState, useEffect } from "react";
import {View, TouchableOpacity, Text, Image, ScrollView} from "react-native";
import { useTheme, useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-dynamic-vector-icons";
import * as NavigationService from "react-navigation-helpers";
import {} from "@react-navigation/native";

/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
// import Text from "@shared-components/text-wrapper/TextWrapper";
import { PRIVATESCREENS } from "@shared-constants";
import { useDispatch } from "react-redux";
import { setLogout } from "../auth/rx/reducer";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import PIbutton from "@shared-components/buttons/Pbutton";
import { useMutation, useSubscription } from "@apollo/client";
import {
  GET_DOCTOR_REQUEST,
  UPDATE_TRANSACTION_BY_TRANSACTION_TYPE_ID,
} from "../../connection/mutation";
import {
  TRANSACTION_UPDATED_SUBSCRIPTION,
  NEW_TRANSACTION,
} from "../../connection/subscription";
import Notification from "@shared-components/notification/notification";

interface ProfileScreenProps {}

interface RewardProps {
  title: string;
  detail: string;
}

interface OpportunityProps {
  img: any;
  daysLeft: string;
  title: string;
  reward?: undefined | RewardProps[];
  additionalRewards?: undefined | RewardProps[];
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  //TO BE REFACTOR
  const PATIENT_APPROVED_TRANSACTION_ID = "640a0a2284947b59273ea03d";
  const PATIENT_ID = "6409ffecd48bc34d50258d7c";
  //

  const isFocused = useIsFocused();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Screen1");
  const [showNotification, setShowNotification] = useState(false);
  const [doctorRequest, setDoctorRequest] = useState([]);
  const [getDoctorRequest] = useMutation(GET_DOCTOR_REQUEST);

  const [updateTransaction] = useMutation(
    UPDATE_TRANSACTION_BY_TRANSACTION_TYPE_ID,
  );

  const { _a, _b, _c } = useSubscription(TRANSACTION_UPDATED_SUBSCRIPTION, {
    onData: async ({ data }) => {
      console.log(data);
      // if (data) {
      //   const transactionTypeText =
      //     data.transactionUpdated.patient.transaction_id[0].transaction_type
      //       .transaction_type_text;
      //   if (transactionTypeText === "DOCTOR_REQUEST") {
      //     console.log("validated");
      //     setShowNotification(true);
      //     setTimeout(() => {
      //       setShowNotification(false);
      //     }, 5000);
      //     await callGraphQlAPI();
      //   }
      // }
    },
  });

  const { _aa, _bb, _cc } = useSubscription(NEW_TRANSACTION, {
    onData: async ({ data }) => {
      console.log(data.data.newTransaction);
      if (data) {
        const transactionTypeText =
          data.data.newTransaction.patient.transaction_id[0].transaction_type
            .transaction_type_text;
        if (transactionTypeText === "DOCTOR_REQUEST") {
          console.log("validated");
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
          await callGraphQlAPI();
        }
      }
    },
  });

  const handleTabPress = async (tabName: string) => {
    setActiveTab(() => {
      const newCount = tabName;
      if (newCount === "Screen3") {
        callGraphQlAPI();
      }
      return newCount;
    });
  };
  const handleLogout = () => {
    dispatch(setLogout());
  };
  const handleItemPress = (OpportunityRecord: any) => {
    NavigationService.push(PRIVATESCREENS.OPPORTUNITY_RECORD, {
      OpportunityRecord,
    });
  };

  const callGraphQlAPI = async () => {
    try {
      const { data } = await getDoctorRequest({
        variables: {
          input: {
            // eslint-disable-next-line camelcase
            patient_id: PATIENT_ID,
          },
        },
      });
      setDoctorRequest([]);
      setDoctorRequest(data.getTransactionByPatientId);
      return data;
    } catch (error) {
      throw new Error(`Could not fetch doctor list by id: ${error.message}`);
    }
  };

  const approveRequest = async (transaction_id: string) => {
    console.log(transaction_id);

    try {
      const { data } = await updateTransaction({
        variables: {
          updateTransactionId: transaction_id,
          input: {
            transaction_type_id: PATIENT_APPROVED_TRANSACTION_ID,
          },
        },
      });

      if (data) {
        await callGraphQlAPI();
      }
    } catch (error) {
      throw new Error(`Could not fetch doctor list by id: ${error.message}`);
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Screen1 = () => {
    const opportunityData: OpportunityProps[] = [
      {
        img: require("../../assets/contribute-data/sample-image-list-1.png"),
        daysLeft: "10 Days left",
        title: "Support colorectal screening to save lives",
        reward: [
          {
            title: "2 doses",
            detail: "Shingrix Vaccine",
          },
          {
            title: "HK$100",
            detail: "K11 Musea cash coupon",
          },
        ],
      },
      {
        img: require("../../assets/contribute-data/sample-image-list-1.png"),
        daysLeft: "30 Days Left",
        title: "Useful health info selected for you",
        reward: [
          {
            title: "HK$50",
            detail: "K11 Musea cash coupon",
          },
        ],
      },
      {
        img: require("../../assets/contribute-data/sample-image-list-1.png"),
        daysLeft: "30 Days Left",
        title: "Join the fight against the hepatitis B virus",
        reward: [
          {
            title: "HK$125",
            detail: "K11 Musea cash coupon",
          },
        ],
      },
      {
        img: require("../../assets/contribute-data/sample-image-list-1.png"),
        daysLeft: "30 Days Left",
        title:
          "Enable better insurance coverage for people with cardiovascular disease risks",
        reward: [
          {
            title: "HK$150",
            detail: "K11 Musea cash coupon",
          },
        ],
      },
    ];

    return (
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <ScrollView>
          {opportunityData.map((item, key) => (
            <OpportunityCard key={`opportunity-card-${key}`} {...item} />
          ))}
        </ScrollView>
      </View>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const Screen2 = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        <SharedDataCard />
      </View>
    );
  };

  const Screen3 = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
        {renderDoctorRequest()}
      </View>
    );
  };

  const renderDoctorRequest = () => {
    return (
      // const {doctor_name, doctor_last_name, hospital_name, hospital_address, hospital_city, hospital_state, hospital_email} = props
      <FlatList
        data={doctorRequest}
        renderItem={({ item }) => (
          <DoctorCard
            transaction_id={item._id}
            doctor_name={item.doctor.doctor_name}
            doctor_last_name={item.doctor.doctor_last_name}
            hospital_name={item.doctor.hospital_id.hospital_name}
            hospital_address={item.doctor.hospital_id.hospital_address}
            hospital_city={item.doctor.hospital_id.hospital_city}
            hospital_state={item.doctor.hospital_id.hospital_state}
            hospital_email={item.doctor.hospital_id.hospital_email}
            transaction_type_text={item.transaction_type.transaction_type_text}
          />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const OpportunityCard = (opportunityData: OpportunityProps) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress("Opportunity Record")}>
        <View
          style={{
            borderRadius: 15,
            backgroundColor: "#ffffff",
            width: ScreenWidth * 0.9,
            padding: 15,
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Image
                source={opportunityData.img}
                style={{
                  width: 115,
                  height: 155,
                }}
              />
              <View
                style={{
                  backgroundColor: "#383D39",
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  position: "absolute",
                  bottom: 9,
                  left: 7,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 11,
                    fontWeight: "900",
                  }}
                >
                  {opportunityData.daysLeft}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: 15,
                marginRight: 15,
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 15,
                  color: "#383D39",
                }}
              >
                {opportunityData.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/contribute-data/reward-icon.png")}
                  style={{
                    width: 16,
                    height: 16,
                  }}
                />
                <View
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 4,
                      lineHeight: 17,
                      fontWeight: "700",
                      fontSize: 11,
                      alignItems: "center",
                      color: "#D1AE6C",
                    }}
                  >
                    {opportunityData.reward ? "Reward" : "Additional Reward"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                {opportunityData.reward?.map((item, key) => (
                  <View
                    key={`reward-item-${key}`}
                    style={{
                      flex: 1,
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 14,
                        color: "#606461",
                        lineHeight: 21,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 10,
                        color: "#888B88",
                        marginRight: 5,
                      }}
                    >
                      {item.detail}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const SharedDataCard = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#000000",
          width: ScreenWidth * 0.9,
          padding: 15,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text>shared until 2023-03-01 </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#7BA23F" }}>
              Securely Shared
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 15 }}>
            Support colorectal screening to save lives{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Icon
            name={"gift"}
            type="AntDesign"
            color={colors.iconBlack}
            size={30}
          />
          {/* reward component */}
          <View
            style={{
              borderRadius: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#696C69",
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                padding: 5,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>2 dose</Text>
            </View>
            <View
              style={{
                backgroundColor: "#999C9A",
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5,
                padding: 5,
              }}
            >
              <Text>Shingrix vaccine</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#696C69",
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                padding: 5,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>100 HKD</Text>
            </View>
            <View
              style={{
                backgroundColor: "#999C9A",
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5,
                padding: 5,
              }}
            >
              <Text>K11 Musea</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const DoctorCard = (props) => {
    const {
      transaction_id,
      doctor_name,
      doctor_last_name,
      hospital_name,
      hospital_address,
      hospital_city,
      hospital_state,
      hospital_email,
      transaction_type_text,
    } = props;
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor:
            transaction_type_text === "DOCTOR_REQUEST" ? "#000000" : "green",
          width: ScreenWidth * 0.9,
          padding: 15,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text>{hospital_email}</Text>
          <TouchableOpacity
            onPressIn={async () => await approveRequest(transaction_id)}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color:
                  transaction_type_text === "DOCTOR_REQUEST"
                    ? "#7BA23F"
                    : "#000000",
              }}
            >
              Accept Request
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 15 }}>
            Dr. {doctor_name} {""} {doctor_last_name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 5 }}>
            {hospital_name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 14, marginBottom: 5 }}>
            {hospital_address} {", "} {hospital_city}
            {", "}
            {hospital_state}
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {/* <Icon
            name={"gift"}
            type="AntDesign"
            color={colors.iconBlack}
            size={30}
          /> */}
          {/* reward component */}
          {/* <View
            style={{
              borderRadius: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#696C69",
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                padding: 5,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>2 dose</Text>
            </View>
            <View
              style={{
                backgroundColor: "#999C9A",
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5,
                padding: 5,
              }}
            >
              <Text>Shingrix vaccine</Text>
            </View>
          </View> */}
          {/* <View
            style={{
              borderRadius: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#696C69",
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                padding: 5,
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>100 HKD</Text>
            </View>
            <View
              style={{
                backgroundColor: "#999C9A",
                borderTopEndRadius: 5,
                borderBottomEndRadius: 5,
                padding: 5,
              }}
            >
              <Text>K11 Musea</Text>
            </View>
          </View> */}
        </View>
      </View>
    );
  };
  const borderStyle1 = () => {
    if (activeTab === "Screen1") {
      return {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000000",
        height: 35,
        justifyContent: "center",
        backgroundColor: "#7BA23F",
        color: "#FFFFFF",
      };
    }
  };

  const borderStyle2 = () => {
    if (activeTab === "Screen2") {
      return {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000000",
        height: 35,
        justifyContent: "center",
        backgroundColor: "#7BA23F",
        color: "#FFFFFF",
      };
    }
  };
  const borderStyle3 = () => {
    if (activeTab === "Screen3") {
      return {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000000",
        height: 35,
        justifyContent: "center",
        backgroundColor: "#7BA23F",
        color: "#FFFFFF",
      };
    }
  };

  const renderScreen = (activeTab: string) => {
    switch (activeTab) {
      case "Screen1":
        return <Screen1 />;
      case "Screen2":
        return <Screen2 />;

      case "Screen3":
        return <Screen3 />;
      default:
        return <Screen1 />;
    }
  };

  const tabList = [
    {
      screenName: "Screen1",
      title: "Opportunities",
    },
    {
      screenName: "Screen3",
      title: "Followup Requests",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={styles.headerText}>Contributions</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={styles.headerInfo}>
                Contribute Data Now to Get Rewards
              </Text>
              <Image
                source={require("../../assets/contribute-data/question-mark-icon.png")}
                style={{
                  width: 14,
                  height: 14,
                  marginLeft: 4,
                }}
              />
            </View>
          </View>
          <Image
            source={require("../../assets/contribute-data/menu-add.png")}
            style={{
              width: 16,
              height: 16,
              marginLeft: 30,
            }}
          />
          <Image
            source={require("../../assets/contribute-data/menu-icon.png")}
            style={{
              width: 16,
              height: 16,
              marginLeft: 30,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginBottom: 26,
          // borderBottomWidth: 2,
          // borderBottomColor: "#BABCB7",
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
        >
          {tabList.map((item, key) => (
            <TouchableOpacity
              key={"navigation-tab-" + key}
              onPress={async () => handleTabPress(item.screenName)}
            >
              <View
                style={{
                  justifyContent: "center",
                  height: 40,
                  borderBottomWidth: 2,
                  borderBottomColor:
                    activeTab === item.screenName ? "#7BA040" : "#BABCB7",
                  marginRight: 38,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    color:
                      activeTab === item.screenName ? "#7BA040" : "#BABCB7",
                    fontSize: 13,
                    lineHeight: 20,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {renderScreen(activeTab)}
      <Notification
        message="A new doctor request has been received!"
        visible={showNotification}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
