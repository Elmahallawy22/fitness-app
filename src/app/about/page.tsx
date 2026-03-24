import { useLocaleNavigation } from "../../lib/hooks/use-navigation";

export default function About() {
    const { localeNavigate } = useLocaleNavigation();

  return (
<>
<h1>About</h1>
<div onClick={()=>localeNavigate("home")}>go home </div>
</>
  )
}
