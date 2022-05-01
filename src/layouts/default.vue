<template>
  <div bg="dark-500">
    <div container="~" m="auto" h="min-screen" flex="~ row">
      <header w="1/3" m="auto">
        <h1 font="serif" text="uppercase 8xl green-500">Wind</h1>

        <div m="t-6">
          <Header :title="$frontmatter.title" />

          <nav flex="~ row" gap="4" m="t-6" font="bold" text="green-400 opacity-75">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </nav>
        </div>
      </header>

      <div w="2/3" m="auto" h="auto" text="true-gray-400">
        <slot />
      </div>
    </div>
  </div>
</template>
