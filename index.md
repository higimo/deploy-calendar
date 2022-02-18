---
layout: month.njk
eleventyComputed:
  title: Когда лучше деплоить в продакшен по месяцам
  h1: Когда лучше деплоить в продакшен по месяцам
---
<div class="container">
	<ul class="main-links">
{%- for post in collections.index -%}
		<li><a href="/{{ post.date }}/">{{ post.date | fullDate }}</li>
{%- endfor -%}
	</ul>
</div>
{%- if url != '/' -%}
<script>
	alert('higi')
</script>
{% endif %}

