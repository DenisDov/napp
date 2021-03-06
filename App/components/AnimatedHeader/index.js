import React, { useEffect } from 'react';

import { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import { AnimatedText } from '../../theme';

const AnimatedHeader = ({ text }) => {
	const opacity = useSharedValue(0);
	const translate = useSharedValue(20);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
			transform: [{ translateY: translate.value }],
		};
	});

	useEffect(() => {
		opacity.value = withSpring(1);
		translate.value = withTiming(0);
	}, [opacity, translate]);

	return (
		<AnimatedText variant="header" style={animatedStyle}>
			{text}
		</AnimatedText>
	);
};

export default AnimatedHeader;
