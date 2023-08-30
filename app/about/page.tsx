import AboutMeSelector from '@/components/aboutMeTabs'

export default function About() {
  return (
    <main className="flex p-24 h-[calc(100vh-72px)] items-center"> 
      <AboutMeSelector
        tab1="Art"
        tab2="Dance"
        tab3="Film"
        title="ABOUT ME"
      />
    </main>
  )
}
