import { View, Image } from '@tarojs/components';

const categories = [
  { icon: 'https://picsum.photos/200/300', text: '美食' },
  { icon: 'https://picsum.photos/200/300', text: '玩乐' },
  { icon: 'https://picsum.photos/200/300', text: '文娱' },
  { icon: 'https://picsum.photos/200/300', text: '健身' },
];

export default function CategoryIcons() {
  return (
    <View className="flex justify-around">
      {categories.map((category, index) => (
        <View key={index} className="flex flex-col items-center">
          <Image
            src={category.icon}
            className="w-12 h-12 mb-1"
            mode="aspectFill"
          />
          <View className="text-sm text-gray-600">{category.text}</View>
        </View>
      ))}
    </View>
  );
}
