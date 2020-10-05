import * as Constants from '@constants/index';
import { Colors, Mixins } from '@styles/index';
import React, { useState, useCallback } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

interface Props {
  itemsPerInterval: number;
  items: React.ReactNode[];
}

const Carousel: React.FC<Props> = (props) => {
  const { items } = props;
  const itemsPerInterval = props.itemsPerInterval || 1;

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const init = useCallback(
    (width: number) => {
      setWidth(width);
      const totalItems = items.length;
      setIntervals(Math.ceil(totalItems / itemsPerInterval));
    },
    [itemsPerInterval, items]
  );

  const getInterval = useCallback(
    (offset: any) => {
      for (let i = 1; i <= intervals; i++) {
        if (Math.round(offset) < Math.round((width / intervals) * i)) {
          return i;
        }
        if (i === intervals) {
          return i;
        }
      }
      return 0;
    },
    [intervals, width]
  );

  const bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <View
        key={i}
        style={{
          ...styles.bullet,
          backgroundColor: interval === i ? Colors.ORANGE : Colors.LIGHT_GRAY,
        }}
      />
    );
  }

  const output = (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        pagingEnabled
        contentContainerStyle={{ ...styles.carousel, width: Constants.DEVICE_WIDTH * intervals }}
        onContentSizeChange={init}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
      >
        {props.items.map((item, i) => (
          <View key={i} style={{ ...styles.cardContainer, width: Constants.DEVICE_WIDTH }}>
            {item}
          </View>
        ))}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </>
  );

  return <View style={styles.container}>{output}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Constants.DEVICE_WIDTH,
    maxHeight: Mixins.sizeResponse(500, 600),
    minHeight: 350,
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    paddingBottom: 50,
  },
  bullets: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    left: 0,
  },
  bullet: {
    width: Mixins.sizeResponse(10, 13),
    height: Mixins.sizeResponse(10, 13),
    borderRadius: 13 / 2,
    marginHorizontal: 5,
  },
});

export default React.memo(Carousel);
