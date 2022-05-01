<template>
  <div bg="dark-500">
    <div container="~" m="auto" h="min-screen" flex="~ col md:row" p="x-8 y-4" gap="4">
      <header w="md:1/3" m="auto" text="center" p="x-2">
        <h1 font="serif" text="uppercase 8xl md:6xl lg:8xl green-500">Wind</h1>

        <div m="t-6">
          <Header :title="$frontmatter.title" />
        </div>
      </header>

      <div w="md:2/3" m="auto t-8 md:t-auto" h="auto" text="true-gray-400">
        <slot />
      </div>
    </div>
  </div>
</template>
