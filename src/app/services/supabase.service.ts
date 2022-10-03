import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE } from '../constants/supabase.constants';
import { IProfile } from '../interfaces/user-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase!: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      SUPABASE.projectUrl,
      SUPABASE.anonKey
    )
  }

  /* -------------------------------------------------------------------------- */
  /*                                   GETTERS                                  */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- USER ---------------------------------- */
  get user() { return this.supabase.auth.user(); }

  /* --------------------------------- SESSION -------------------------------- */
  get session() { return this.supabase.auth.session(); }

  /* --------------------------------- PROFILE -------------------------------- */
  get profile() {
    return this.supabase
      .from('profiles')
      .select('username, website, avatar_url, screen_name')
      .eq('id', this.user?.id)
      .single();
  }

  /* -------------------------------------------------------------------------- */
  /*                                   METHODS                                  */
  /* -------------------------------------------------------------------------- */
  /* ------------------------------ TRACK CHANGES ----------------------------- */
  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) { return this.supabase.auth.onAuthStateChange(callback) }

  /* --------------------------- SIGN UP / IN / OUT --------------------------- */
  async signUp(email: string, password: string) {
    const { user, session, error } = await this.supabase.auth.signUp({
      email, password
    });

    console.log('user', user);
    console.log('session', session);
    console.log('error', error);
  }
  signIn(email: string) {
    return this.supabase.auth.signIn({ email });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  /* --------------------------------- PROFILE -------------------------------- */
  updateProfile(profile: IProfile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date()
    }

    return this.supabase.from('profiles').upsert(
      update, {
        returning: 'minimal'
      }
    )
  }

  downloadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }
}
