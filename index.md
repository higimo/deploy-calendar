---
layout: month.njk
links:
    -
    - all
pagination:
    data: links
    size: 1
    alias: name
permalink: "/{{ name }}/"
eleventyComputed:
    title: Когда лучше деплоить в продакшен по месяцам
    h1: Когда лучше деплоить в продакшен по месяцам
---
<div class="container">
	<ul class="main-links">
{%- for post in collections.index -%}
		<li><a href="/{{ post.date }}/">{{ post.date | fullDate }}</a></li>
{%- endfor -%}
	</ul>
</div>
{{ url }}
{%- if page.url == '/' -%}
<script>
	const date = new Date()
	const curMonthUrl = `/${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}/`
	location.href = curMonthUrl
</script>
{% endif %}

