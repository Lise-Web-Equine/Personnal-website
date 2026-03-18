export const useAddEquineTemplates = async () => {
  const supabase = useSupabase()
  
  const templates = [
    {
      name: 'Horizon',
      description: 'Style Épuré • Calme • Professionnel. Un univers visuel basé sur des tons bleus apaisants. Idéal pour instaurer un climat de confiance immédiat et mettre en avant votre rigueur technique.',
      category: 'equine',
      price: 40.00,
      image_url: 'https://images.pexels.com/photos/1559387/pexels-photo-1559387.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo_url: '#',
      features: ["Prestations phares & tarifs", "Expérience terrain", "Focus prestation technique", "Formulaire de contact", "Témoignages"],
      tags: ['equine', 'professionnel', 'bleu', 'confiance', 'technique'],
      is_featured: true,
      downloads: 0,
      rating: 0.0
    },
    {
      name: 'Ancrage',
      description: 'Style Doux • Naturel • Holistique. Une esthétique épurée et apaisante qui laisse place à l\'image et au ressenti, parfaite pour les approches globales et naturelles.',
      category: 'equine',
      price: 40.00,
      image_url: 'https://images.pexels.com/photos/1559387/pexels-photo-1559387.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo_url: '#',
      features: ["Prestations phares & tarifs", "Bénéfices du soin", "Déroulement d'une séance", "Formulaire de contact", "Témoignages immersifs"],
      tags: ['equine', 'naturel', 'holistique', 'doux', 'apaisant'],
      is_featured: true,
      downloads: 0,
      rating: 0.0
    }
  ]

  try {
    for (const template of templates) {
      const { error } = await supabase
        .from('templates')
        .insert(template)
      
      if (error) {
        console.error(`Error inserting template ${template.name}:`, error)
        throw error
      }
    }
    
    console.log('Successfully added Horizon and Ancrage templates!')
    return { success: true, error: null }
  } catch (error) {
    console.error('Failed to add equine templates:', error)
    return { success: false, error }
  }
}
