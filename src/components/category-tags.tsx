import { ScrollView, View } from '@tarojs/components';

const tags = ['推荐', '美食', '运动', '徒步', '探店', '清吧', '健身'];

export default function CategoryTags() {
  return (
    <ScrollView
      scrollX
      className="whitespace-nowrap py-2 px-3 border-b border-gray-100"
    >
      {tags.map((tag, index) => (
        <View
          key={index}
          className="inline-block mx-2 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 first:ml-0 last:mr-0"
        >
          {tag}
        </View>
      ))}
    </ScrollView>
  );
}
