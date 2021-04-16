<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-typo">
          <Logo :width="200" />
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          Half Helix / Kit.
        </h1>
        <p class="text-xl font-medium text-center">
          A <span class="text-ui-primary font-bold">Shopify</span> build and development tool.

        <div class="py-4">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo">npm i -g @halfhelix/kit</code>
        </div>

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center container max-w-lg">
         So we developed this tool for own team at <a class="underline" href="https://halfhelix.com">Half Helix</a> but hey, we thought that there might be other people out there that could enjoy this so we made it public!
        </p>

        <p class="text-lg text-center flex flex-wrap container max-w-xl justify-center">
          <span
            v-for="(tag, index) in tags"
            :key="`tag-${index}`"
            class="border border-ui-primary padding p-1 rounded text-ui-primary flex items-center text-xs mr-2 mt-2">
            <TagIcon class="mr-1" size="1x" />
            {{ tag }}
          </span>
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <LinkIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Dev, Build + Deploy
          </h3>
          <p class="text-lg text-center">
            This tool is used to setup a development environment, build the theme and deploy it to Shopify. If does a few other things too, like linting.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ToggleLeftIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Configuration First
          </h3>
          <p class="text-lg text-center">
            A lot of the default functionality is configurable through the <span class="font-bold">kit.config.js</span> file. There's close to 80 different ways to override change the behavior.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <GitMergeIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            CI/CD Friendly
          </h3>
          <p class="text-lg text-left">
            We handle our linting, building and deployments through CI/CD using Gitlab. You can use this tool to help get away from running critical updates locally.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ToggleLeftIcon, GitMergeIcon, LinkIcon, MoonIcon, SearchIcon, TagIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ToggleLeftIcon,
    GitMergeIcon,
    LinkIcon,
    MoonIcon,
    SearchIcon,
    TagIcon
  },

  metaInfo() {
    const title = 'Great Documentation starts here';
    const description = 'DOCC is a starter theme with instant search and dark mode for writing great technical documentation. Based on Gridsome!';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  },

  data () {
    return {
      tags: [
        'Install Globally',
        'Webpack',
        'Browser Sync',
        'Babel',
        'Sass',
        'Live Reloading',
        'Stylelint',
        'Eslint',
        'Git Linting',
        'Git Auto MRs',
        'Gitlab CI Friendly',
        'Critical CSS',
        'Webpack Chunking',
        'Theme Naming',
        '+ a whole bunch more!'
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
