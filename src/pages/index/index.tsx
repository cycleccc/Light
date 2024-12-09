import { View } from '@tarojs/components';
import CategoryIcons from '@/components/category-icons';
import CategoryTags from '@/components/category-tags';
import ContentMasonry from '@/components/content-masonry';
import Search from '@/components/Search';

export default function Index() {
  return (
    <View className="flex flex-col min-h-screen bg-gray-50">
      <View className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Search />
        <CategoryIcons />
        <CategoryTags />
      </View>
      <View className="mt-[168px]">
        <ContentMasonry />
      </View>
    </View>
  );
}
