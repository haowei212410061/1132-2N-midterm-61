import { supabase } from './supabase';

export const getTours = async function () {
  const { data, error } = await supabase.from('tour_61').select('*');

  if (error) {
    console.error(error);
    throw new Error('Blogs could not be loaded');
  }

  return data;
};
