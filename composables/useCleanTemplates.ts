import type { Database } from '~/types/database.types'

export const useCleanTemplates = async () => {
  const supabase = useSupabase()
  
  try {
    // First, get all existing templates
    const { data: existingTemplates, error: fetchError } = await supabase
      .from('templates')
      .select('id, name')
      .returns<Database['public']['Tables']['templates']['Row'][]>()
    
    if (fetchError) {
      console.error('Error fetching existing templates:', fetchError)
      throw fetchError
    }

    // Filter out Horizon and Ancrage (keep these two)
    const templatesToDelete = existingTemplates?.filter(
      template => template.name !== 'Horizon' && template.name !== 'Ancrage'
    ) || []

    if (templatesToDelete.length === 0) {
      console.log('No templates to delete (only Horizon and Ancrage exist)')
      return { success: true, deleted: 0, error: null }
    }

    // Delete the filtered templates
    let deletedCount = 0
    for (const template of templatesToDelete) {
      const { error } = await supabase
        .from('templates')
        .delete()
        .eq('id', template.id)
      
      if (error) {
        console.error(`Error deleting template ${template.name}:`, error)
        continue // Continue with next template
      }
      
      deletedCount++
      console.log(`Deleted template: ${template.name}`)
    }

    console.log(`Successfully deleted ${deletedCount} templates. Kept Horizon and Ancrage.`)
    return { success: true, deleted: deletedCount, error: null }
    
  } catch (error) {
    console.error('Failed to clean templates:', error)
    return { success: false, deleted: 0, error }
  }
}
