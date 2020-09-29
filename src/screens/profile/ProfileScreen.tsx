import MessageIcon from '@components/icons/MessageIcon';
import NotificationsIcons from '@components/icons/NotificationsIcon';
import UserIcon from '@components/icons/UserIcon';
import Layout from '@components/layouts/Layout';
import LineItem from '@components/ui/LineItem';
import HeaderText from '@components/ui/text/HeaderText';
import { Globals, Colors, Typography, Spacing } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

const SIZE = 20;
const COLOR = Colors.GRAY;

const ProfileScreen: React.FC = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderText color={Colors.PINK}>Hey, Robert</HeaderText>
        </View>
        <View style={styles.section}>
          <HeaderText
            color={Colors.GRAY}
            size={Typography.FONT_SIZE_16}
            styles={{ width: Globals.CONTENT_WIDTH, maxWidth: Globals.MAX_CONTENT_WIDTH }}
          >
            Account Settings
          </HeaderText>
          <LineItem
            text="Personal information"
            color={COLOR}
            icon={<UserIcon size={SIZE} color={COLOR} />}
          />
          <LineItem
            text="Notifications"
            color={COLOR}
            icon={<NotificationsIcons size={SIZE + 8} color={COLOR} />}
          />
        </View>
        <View style={styles.section}>
          <HeaderText
            color={Colors.GRAY}
            size={Typography.FONT_SIZE_16}
            styles={{ width: Globals.CONTENT_WIDTH, maxWidth: Globals.MAX_CONTENT_WIDTH }}
          >
            Support
          </HeaderText>
          <LineItem
            text="Give us feedback"
            color={COLOR}
            icon={<MessageIcon size={SIZE} color={COLOR} />}
          />
        </View>
        <LineItem text="Logout" color={Colors.BLUE} size={Typography.FONT_SIZE_18} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    paddingBottom: 15,
    borderBottomColor: Colors.PINK,
    borderBottomWidth: 1,
    marginBottom: moderateVerticalScale(15),
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  section: {
    marginVertical: Spacing.SCALE_16,
    width: '100%',
    alignItems: 'center',
  },
  logout: {
    marginTop: moderateVerticalScale(10),
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
});

export default React.memo(ProfileScreen);
