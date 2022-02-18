---
layout: month.njk
showDescription: true
showNavigation: true
isMonth: true
pagination:
    data: main
    size: 1
    alias: data
    addAllPagesToCollections: true
permalink: "/{{ data.date | slug }}/"
eleventyComputed:
  title: Когда лучше деплоить в продакшен в {{ data.date | fullDateDecline }}
  h1: Когда лучше деплоить в продакшен в {{ data.date | fullDateDecline }}
---
<div class="horizontal-scroll">
<table>
<thead>
<tr>
<td>Знак зодиака</td>
<td>Благоприятные дни</td>
<td>Нейтральные дни</td>
<td>Неблагоприятные дни</td>
</tr>
</thead>
<tbody>

{%- for item in data.data %}

<tr class="row">

<td><a href="/pdf/{{ item.slug }}-{{ data.date }}/">{{ item.name }}</a></td>

{%- for value in item.value %}
<td class="calc">{%- for number in value %}{{ number }} {% endfor -%}</td>

{% endfor -%}

</tr>
{% endfor -%}

</tbody>
</table>
</div>
