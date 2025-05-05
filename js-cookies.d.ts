declare module 'js-cookie' {
    export interface CookieAttributes {
      expires?: number | Date;
      path?: string;
      domain?: string;
      secure?: boolean;
      sameSite?: 'strict' | 'lax' | 'none';
    }
  
    export function set(name: string, value: string, options?: CookieAttributes): void;
    export function get(name: string): string | undefined;
    export function remove(name: string, options?: CookieAttributes): void;
  }