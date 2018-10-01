class User < ApplicationRecord
    validates_presence_of :provider, :uid, :email
    validates_uniqueness_of :uid, scope: :provider
end