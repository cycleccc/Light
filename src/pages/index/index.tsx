import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

export default function Index() {
  return (
    // <View className="index">
    <View className="text-[#acc855] text-[100px]">
      <Text>Hello world!</Text>
      <AtButton type="primary">I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type="primary" circle>
        支持
      </AtButton>
      <Text>共建？</Text>
      <AtButton type="secondary" circle>
        来
      </AtButton>
    </View>
  );
}
