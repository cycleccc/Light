import { View, Image } from '@tarojs/components';
import { Grid } from '@taroify/core';

const items = [
  {
    image: '/assets/cafe.jpg',
    title: '新开的咖啡店，环境很棒',
    author: '老王',
    likes: '118',
  },
  {
    image: '/assets/dessert.jpg',
    title: '最近很出名的节日限量巧克力',
    author: '高河',
    likes: '97',
  },
  {
    image: '/assets/coffee.jpg',
    title: '拉花艺术，每天都不一样',
    author: '咖啡师小张',
    likes: '156',
  },
  {
    image: '/assets/fitness.jpg',
    title: '城市运动，保持健康',
    author: '健身达人',
    likes: '203',
  },
];

export default function ContentMasonry() {
  return (
    <Grid columns={2} gutter={8} className="p-3">
      {items.map((item, index) => (
        <Grid.Item key={index}>
          <View className="mb-3 bg-white rounded-lg overflow-hidden shadow-sm">
            <Image src={item.image} mode="widthFix" className="w-full" />
            <View className="p-2">
              <View className="text-sm font-medium mb-1">{item.title}</View>
              <View className="flex items-center justify-between text-xs text-gray-500">
                <View>{item.author}</View>
                <View>{item.likes} 赞</View>
              </View>
            </View>
          </View>
        </Grid.Item>
      ))}
    </Grid>
  );
}
