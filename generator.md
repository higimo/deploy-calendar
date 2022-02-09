---
layout: month.njk
showDescription: true
showNavigation: true
pagination:
    data: main
    size: 1
    alias: data
    addAllPagesToCollections: true
permalink: "/{{ data.date | slug }}/"
eleventyComputed:
  title: Когда лучше деплоить в продакшен в {{ data.date | fullDateDecline }}
  h1: Когда лучше деплоить в продакшен в {{ data.date | fullDateDecline }}
---

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

<td>{{ item.name }}</td>

{%- for value in item.value %}
<td class="calc">{%- for number in value %}{{ number }} {% endfor -%}</td>

{% endfor -%}

</tr>
{% endfor -%}

</tbody>
</table>
