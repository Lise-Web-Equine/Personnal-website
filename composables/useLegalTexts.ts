export const useLegalTexts = () => {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Fetch a legal text by its key
   */
  const getLegalText = async (key: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('legal_texts')
        .select('*')
        .eq('key', key)
        .single()

      if (fetchError) throw fetchError

      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch legal text'
      console.error('Error fetching legal text:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * Fetch all legal texts
   */
  const getAllLegalTexts = async () => {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('legal_texts')
        .select('*')
        .order('key')

      if (fetchError) throw fetchError

      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch legal texts'
      console.error('Error fetching legal texts:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * Update a legal text
   */
  const updateLegalText = async (key: string, content: string) => {
    loading.value = true
    error.value = null

    try {
      const { error: updateError } = await (supabase as any)
        .from('legal_texts')
        .update({
          content,
          updated_at: new Date().toISOString()
        })
        .eq('key', key)

      if (updateError) throw updateError

      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update legal text'
      console.error('Error updating legal text:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    getLegalText,
    getAllLegalTexts,
    updateLegalText
  }
}
