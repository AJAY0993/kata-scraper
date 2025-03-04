def get_users_ids(st):
    return [s.strip().replace("#", "").removeprefix("uid").lower().strip() for s in st.split(", ")]