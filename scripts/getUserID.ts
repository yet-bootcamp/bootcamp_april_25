import { useWebApp } from "vue-tg"

export function getUserID() {
  const { initDataUnsafe } = useWebApp()
  return ((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id
}
