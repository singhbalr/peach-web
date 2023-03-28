import React, { useMemo, useState } from "react";
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Button } from "react-native-paper";

interface HomeScreenProps {}

interface RewardProps {
  title: string;
  detail: string;
}

interface AvailableDataProps {
  img: any;
  daysLeft: string;
  title: string;
  reward?: undefined | RewardProps[];
  additionalRewards?: undefined | RewardProps[];
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const screenSize = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };
  const [activeTab, setActiveTab] = useState("Screen1");

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  // const MenuButton = () => (
  //   <RNBounceable>
  //     <Icon name="menu" type="Ionicons" color={colors.iconBlack} size={30} />
  //   </RNBounceable>
  // );

  // const Header = () => (
  //   <View style={styles.header}>
  //     <MenuButton />
  //   </View>
  // );

  // const List = () => (
  //   <View style={styles.listContainer}>
  //     <FlatList
  //       data={MockData}
  //       renderItem={({ item }) => (
  //         <CardItem data={item} onPress={handleItemPress} />
  //       )}
  //     />
  //   </View>
  // );

  // const Welcome = () => (
  //   <>
  //     <Text h1 bold color={colors.text}>
  //       Hello Kuray
  //     </Text>
  //     <Text
  //       fontFamily={fonts.montserrat.lightItalic}
  //       color={colors.placeholder}
  //     >
  //       Welcome Back
  //     </Text>
  //   </>
  // );

  // const Content = () => (
  //   <View style={styles.contentContainer}>
  //     <Welcome />
  //     <List />
  //   </View>
  // );

  const handleTabPress = async (tabName: string) => {
    setActiveTab(() => {
      const newCount = tabName;
      // if (newCount === "Screen3") {
      //   callGraphQlAPI();
      // }
      return newCount;
    });
  };

  const AvailableCard = (availableDataProps: AvailableDataProps) => {
    return (
      <TouchableOpacity
      // onPress={() => handleItemPress("Opportunity Record")}
      >
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
                source={availableDataProps.img}
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
                  {availableDataProps.daysLeft}
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
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 20,
                  marginBottom: 15,
                  color: "#383D39",
                }}
              >
                {availableDataProps.title}
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
                    {availableDataProps.reward ? "Reward" : "Additional Reward"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                {availableDataProps.reward?.map((item, key) => (
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
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Button
                  style={{
                    marginTop: 10,
                    backgroundColor: "#ECF1E8",
                    paddingHorizontal: 16,
                  }}
                >
                  REDEEM
                </Button>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Screen1 = () => {
    const availableData: AvailableDataProps[] = [
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
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: colors.secondaryBackground,
        }}
      >
        <ScrollView>
          {availableData.map((item, key) => (
            <AvailableCard key={`opportunity-card-${key}`} {...item} />
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderScreen = (activeTab: string) => {
    switch (activeTab) {
      case "Screen1":
        return <Screen1 />;
    }
  };

  const tabList = [
    {
      screenName: "Screen1",
      title: "Available",
    },
    {
      screenName: "Screen2",
      title: "Used",
    },
    {
      screenName: "Screen3",
      title: "Other",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header />
      <Content /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={require("../../assets/header/overlay.png")}
            style={{ width: screenSize.width, height: 120 }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: 34,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              color={colors.white}
              style={{
                fontSize: 22,
                fontWeight: "700",
              }}
            >
              Rewards
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 170,
              }}
            >
              <Image
                source={require("../../assets/header/add-icon-white.png")}
                style={{
                  width: 16,
                  height: 16,
                  marginLeft: 30,
                }}
              />
              <Image
                source={require("../../assets/header/menu-icon-white.png")}
                style={{
                  width: 16,
                  height: 16,
                  marginLeft: 30,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 26,
          // borderBottomWidth: 2,
          // borderBottomColor: "#BABCB7",
          paddingHorizontal: 20,
          backgroundColor: colors.secondaryBackground,
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
    </SafeAreaView>
  );
};

export default HomeScreen;
