import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../constants/sidebarConstants"

export const openSidebar=()=>(dispatch)=>{
  dispatch({type:OPEN_SIDEBAR})
}
export const closeSidebar=()=>(dispatch)=>{
  dispatch({type:CLOSE_SIDEBAR})
}