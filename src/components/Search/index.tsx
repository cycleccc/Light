import { useState } from 'react';
import { View } from '@tarojs/components';
import { Search } from '@taroify/core';

export default function CategoryIcons() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View className="flex items-center p-3">
      <View className="text-lg font-bold mr-2">深圳</View>
      <Search
        value={searchValue}
        placeholder="今晚吃什么"
        onChange={(e) => setSearchValue(e.detail.value)}
        className="flex-1"
      />
    </View>
  );
}
