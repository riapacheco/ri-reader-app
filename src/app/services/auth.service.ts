import { Injectable } from '@angular/core';
import { createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { SUPABASE } from '../constants/supabase.constants';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _supabaseClient!: SupabaseClient;

  constructor() {
    this._supabaseClient = createClient(SUPABASE.projectUrl, SUPABASE.anonKey);
  }

  // Sign In
  public onSignIn(email: string): Promise<any> {
    return this._supabaseClient.auth.signIn({ email });
  }

  // Sign Out
  public onSignOut(): Promise<any> {
    return this._supabaseClient.auth.signOut();
  }

  // User
  public getUser(): User|null {
    return this._supabaseClient.auth.user();
  }

  // Session
  public getSession(): Session|null {
    return this._supabaseClient.auth.session();
  }

  /* ------------------------------ Profile Stuff ----------------------------- */
  // Get Profile
  public getProfile(): PromiseLike<any> {
    const user = this.getUser();

    return this._supabaseClient.from('profiles')
      .select('username, website, avatar_url')
      .eq('id', user?.id)
      .single();
  }

  // Auth Changes
  public onAuthChanges(callback: (event: any, session: Session|null) => void): any {
    return this._supabaseClient.auth.onAuthStateChange(callback);
  }

  // Update Profile
  public onUpdateProfile(userUpdate: IUser): any {
    const user = this.getUser();

    const update = {
      username: userUpdate.name,
      website: userUpdate.website,
      id: user?.id,
      updated_at: new Date()
    };

    return this._supabaseClient.from('profiles').upsert(update, {
      returning: 'minimal',
    })
  }
}
