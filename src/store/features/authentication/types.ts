export interface AuthenticationTokenNewResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface AuthenticationSessionNewResponse {
  success: boolean;
  session_id: string;
}

// AccountDetails
export interface GravatarInfo {
  hash: string;
}

export interface TmdbInfo {
  avatar_path?: any;
}

export interface AvatarInfo {
  gravatar: GravatarInfo;
  tmdb: TmdbInfo;
}

export interface AccountDetails {
  avatar: AvatarInfo;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}
