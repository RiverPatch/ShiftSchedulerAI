// Basic database types - can be expanded as needed
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = 'Owner' | 'Employee';
export type AttendanceStatus = 'present' | 'absent' | 'leave' | 'emergency';
export type LeaveType = 'Full Day' | 'Half Day' | 'Hourly';
export type RequestStatus = 'pending' | 'approved' | 'rejected';
export type AssignmentType = 'manual' | 'ai-generated';
export type ShiftStatus = 'assigned' | 'swapped' | 'emergency';
export type NotificationType = 'schedule_update' | 'emergency_alert' | 'message';
export type ChannelType = 'email' | 'in-app';
export type ReadStatus = 'unread' | 'read';
export type UserStatus = 'active' | 'inactive';

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: number;
          email: string;
          password_hash: string;
          role: UserRole;
          name: string;
          priority_level: number | null;
          status: UserStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: number;
          email: string;
          password_hash: string;
          role: UserRole;
          name: string;
          priority_level?: number | null;
          status?: UserStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: number;
          email?: string;
          password_hash?: string;
          role?: UserRole;
          name?: string;
          priority_level?: number | null;
          status?: UserStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
      attendance: {
        Row: {
          attendance_id: number;
          user_id: number;
          date: string;
          clock_in_time: string | null;
          clock_out_time: string | null;
          status: AttendanceStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          attendance_id?: number;
          user_id: number;
          date: string;
          clock_in_time?: string | null;
          clock_out_time?: string | null;
          status: AttendanceStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          attendance_id?: number;
          user_id?: number;
          date?: string;
          clock_in_time?: string | null;
          clock_out_time?: string | null;
          status?: AttendanceStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
      leave_requests: {
        Row: {
          leave_id: number;
          user_id: number;
          leave_type: LeaveType;
          start_datetime: string;
          end_datetime: string;
          reason: string | null;
          status: RequestStatus;
          approver_id: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          leave_id?: number;
          user_id: number;
          leave_type: LeaveType;
          start_datetime: string;
          end_datetime: string;
          reason?: string | null;
          status?: RequestStatus;
          approver_id?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          leave_id?: number;
          user_id?: number;
          leave_type?: LeaveType;
          start_datetime?: string;
          end_datetime?: string;
          reason?: string | null;
          status?: RequestStatus;
          approver_id?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      shift_schedule: {
        Row: {
          shift_id: number;
          user_id: number;
          date: string;
          shift_start_time: string;
          shift_end_time: string;
          assignment_type: AssignmentType;
          shift_status: ShiftStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          shift_id?: number;
          user_id: number;
          date: string;
          shift_start_time: string;
          shift_end_time: string;
          assignment_type: AssignmentType;
          shift_status?: ShiftStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          shift_id?: number;
          user_id?: number;
          date?: string;
          shift_start_time?: string;
          shift_end_time?: string;
          assignment_type?: AssignmentType;
          shift_status?: ShiftStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
      shift_swap_requests: {
        Row: {
          swap_id: number;
          requester_user_id: number;
          requested_user_id: number | null;
          shift_id: number;
          swap_reason: string | null;
          ai_suggested: boolean;
          status: RequestStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          swap_id?: number;
          requester_user_id: number;
          requested_user_id?: number | null;
          shift_id: number;
          swap_reason?: string | null;
          ai_suggested?: boolean;
          status?: RequestStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          swap_id?: number;
          requester_user_id?: number;
          requested_user_id?: number | null;
          shift_id?: number;
          swap_reason?: string | null;
          ai_suggested?: boolean;
          status?: RequestStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          message_id: number;
          sender_id: number;
          recipient_id: number;
          subject: string | null;
          body: string;
          channel: ChannelType;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          message_id?: number;
          sender_id: number;
          recipient_id: number;
          subject?: string | null;
          body: string;
          channel: ChannelType;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          message_id?: number;
          sender_id?: number;
          recipient_id?: number;
          subject?: string | null;
          body?: string;
          channel?: ChannelType;
          created_at?: string;
          updated_at?: string;
        };
      };
      notifications: {
        Row: {
          notification_id: number;
          user_id: number;
          type: NotificationType;
          content: string;
          read_status: ReadStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          notification_id?: number;
          user_id: number;
          type: NotificationType;
          content: string;
          read_status?: ReadStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          notification_id?: number;
          user_id?: number;
          type?: NotificationType;
          content?: string;
          read_status?: ReadStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

