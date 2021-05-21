---
title: PhoneKills
topNav: false
image: cover.jpg
---
<div>
  <ul>
    {%- for post in collections.blog[0].items  -%}
    <li>
      {%- include 'tile.njk' -%}
    </li>
    {%- endfor -%}
  </ul>
  <a href="/blog/" class="bg-green-300 block shadow-2xl p-2 px-4">More blog post</a>
</div>
<div class="w-full flex flex-wrap">
<div class="flex-1 lg:w-1/2 xl:w-1/2 p-6">
{%- include 'months.njk' -%}
</div>
<div class="flex-1 lg:w-1/2 xl:w-1/2 p-6">
{%- include 'tagcloud.njk' -%}
</div>
</div>