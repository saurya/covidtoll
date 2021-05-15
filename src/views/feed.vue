<template>
  <div>
    <ul class="divide-y divide-gray-200">
      <li v-for="activityItem in activityItems" :key="activityItem.id" class="py-4">
        <div class="flex space-x-3">
          <img class="h-9 w-9 square-full" :src="activityItem.person.imageUrl" alt="" />
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ activityItem.person.name }}</h3>
            </div>
            <p class="text-sm text-gray-500">{{ activityItem.date_of_birth}} - {{ activityItem.date_of_death }} </p>
            <p class="text-sm text-gray-500">{{ activityItem.location }} </p>
            <p class="text-sm text-gray-500">{{ activityItem.blurb_heading}}</p>
            <p class="text-sm text-gray-500">{{ activityItem.blurb_body }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const people = [
  {
    name: 'Lindsay Samuel Moses',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], location: 'Powai, Mumbai', date_of_birth: 'November 1st, 1962', date_of_death: 'June 11th, 2021', blurb_heading: 'Above all else, she loved', blurb_body: 'Anything good happening to anyone she knew.' },
  // More items...
]

export default {
  setup() {
    return {
      people,
      activityItems,
    }
  },
}
</script>

